terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  backend "gcs" {
    bucket = "aleejandroreyna-tfstate"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = "aleejandroreyna"
  region  = "us-central1"
}
