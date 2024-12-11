# collecting-metrics-with-prometheus-grafana-.net

1. 
dotnet new web -o WebMetric
cd WebMetric
dotnet add package OpenTelemetry.Exporter.Prometheus.AspNetCore --prerelease
dotnet add package OpenTelemetry.Extensions.Hosting

![alt text](image.png)

2. dotnet tool update -g dotnet-counters

![alt text](image-1.png)

3. dotnet run

![alt text](image-2.png)

4. dotnet-counters monitor -n WebMetric --counters Microsoft.AspNetCore.Hosting

![alt text](image-3.png)

5. Métrica  http.server.request.duration

![alt text](image-4.png)

6. dotnet-counters monitor -n WebMetric --counters Contoso.Web

![alt text](image-5.png)