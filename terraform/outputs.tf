output "cloud_run_url" {
  value = google_cloud_run_v2_service.nextjs_service.uri
}

output "custom_domain_url" {
  value = "https://portfolio.alejandroreyna.com"
}

output "dns_records_to_create" {
  value = google_cloud_run_domain_mapping.portfolio_domain.status[0].resource_records
}
