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
