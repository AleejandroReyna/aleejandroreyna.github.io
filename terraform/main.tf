resource "google_project_service" "cloud_run_api" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "artifact_registry_api" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

resource "google_artifact_registry_repository" "site_repo" {
  depends_on    = [google_project_service.artifact_registry_api]
  location      = "us-central1"
  repository_id = "site-images"
  description   = "Repositorio Docker para almacenar las imágenes de Next.js/Payload CMS"
  format        = "DOCKER"
}

resource "google_cloud_run_v2_service" "nextjs_service" {
  name     = "alejandro-reyna-site"
  location = "us-central1"
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    scaling {
      min_instance_count = 0
      max_instance_count = 10
    }

    containers {
      image = "us-docker.pkg.dev/cloudrun/container/hello:latest"
      ports {
        container_port = 8080
      }
    }
  }

  lifecycle {
    ignore_changes = [
      client,
      client_version,
      template[0].containers[0].image,
      template[0].containers[0].env,
    ]
  }
}

resource "google_cloud_run_v2_service_iam_member" "public_access" {
  name     = google_cloud_run_v2_service.nextjs_service.name
  location = google_cloud_run_v2_service.nextjs_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

resource "google_cloud_run_domain_mapping" "portfolio_domain" {
  location = "us-central1"
  name     = "portfolio.alejandroreyna.com"

  metadata {
    namespace = "aleejandroreyna"
  }

  spec {
    route_name = google_cloud_run_v2_service.nextjs_service.name
  }
}
