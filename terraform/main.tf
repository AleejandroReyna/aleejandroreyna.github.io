# -----------------------------------------------------------------
# 🔌 HABILITAR LA API DE CLOUD RUN
# -----------------------------------------------------------------
# Le pedimos a Google Cloud que active la API de Cloud Run en nuestro proyecto.
# Esto es indispensable antes de poder crear cualquier servicio de Cloud Run.

resource "google_project_service" "cloud_run_api" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}
