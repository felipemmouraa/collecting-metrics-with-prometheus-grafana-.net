using OpenTelemetry;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

// Configure OpenTelemetry
builder.Services.AddOpenTelemetry()
    .WithMetrics(metrics =>
    {
        metrics
            .AddRuntimeInstrumentation()
            .AddAspNetCoreInstrumentation()
            .AddPrometheusExporter(); // Exposes metrics at /metrics by default
    })
    // If you need traces, you can add them as well:
    .WithTracing(tracing =>
    {
        tracing
            .AddSource("MyOtelApp")
            .SetResourceBuilder(
                ResourceBuilder.CreateDefault().AddService("MyOtelApp"))
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation();
        // You could add more exporters like OTLP here if desired.
    });

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();
// The prometheus exporter will listen for metrics on /metrics
// by default once configured.

app.Run();
