ARG MONGO_VERSION

FROM mongo:${MONGO_VERSION}

# Start mongo in replica set mode in background WITHOUT auth first
ENTRYPOINT mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 & MONGOD_PID=$!; \
    # Wait for MongoDB to be ready
    until $MONGO_COMMAND admin --port $MONGO_REPLICA_PORT --eval "db.adminCommand('ping')"; do sleep 1; done; \
    # Initialize replica set first (before auth)
    INIT_REPL_CMD="rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })"; \
    until ($MONGO_COMMAND admin --port $MONGO_REPLICA_PORT --eval "$INIT_REPL_CMD"); do sleep 1; done; \
    # Create root user if credentials are provided
    if [ ! -z "$MONGO_INITDB_ROOT_USERNAME" ] && [ ! -z "$MONGO_INITDB_ROOT_PASSWORD" ]; then \
    echo "Creating admin user..."; \
    $MONGO_COMMAND admin --port $MONGO_REPLICA_PORT --eval "db.createUser({user: '$MONGO_INITDB_ROOT_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{role: 'root', db: 'admin'}]})"; \
    echo "Admin user created. Restarting with authentication..."; \
    kill $MONGOD_PID; \
    wait $MONGOD_PID; \
    mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 --auth & MONGOD_PID=$!; \
    fi; \
    echo "REPLICA SET ONLINE"; wait $MONGOD_PID;
