import { MeterProvider } from '@opentelemetry/sdk-metrics';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const prometheusPort = 9464; // default port for Prometheus exporter
const prometheusEndpoint = '/metrics';

const exporter = new PrometheusExporter({
  port: prometheusPort,
  endpoint: prometheusEndpoint,
}, () => {
  console.log(`Prometheus scrape endpoint: http://localhost:${prometheusPort}${prometheusEndpoint}`);
});

// Set up the MeterProvider with the Prometheus exporter
const meterProvider = new MeterProvider();
meterProvider.addMetricReader(exporter);

// Create a custom meter
const meter = meterProvider.getMeter('example-meter');

export const requestCounter = meter.createCounter('http_requests_total', {
  description: 'Count all incoming HTTP requests'
});

export const meterProviderInstance = meterProvider;
