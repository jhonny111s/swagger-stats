# [Sistema de monitoreo](https://jhonny111s.github.io/code-of-toth/nodejs/docker/2020/06/16/stats.html)

Se creo una API con expressJS la cual va a usar el agente [swagger-stats](https://swaggerstats.io/) para recolectar las métricas, como plataforma de monitoreo vamos a usar [prometheus](https://prometheus.io/docs/prometheus/latest/installation/) y como plataforma de visualización y análisis vamos a usar [grafana](https://grafana.com/docs/grafana/latest/installation/docker/).

## swagger-stats

`swagger-stats` es un paquete que se encarga de recolectar todas las métricas y exponerlas como un endpoint en la ruta */swagger-stats/metrics*. Lo interesante de este paquete es que nos permite interactuar con una UI y observar todas nuestras estadísticas de manera gráfica.

- http://localhost:4000/users
- http://localhost:4000/swagger-stats/ui
- http://localhost:4000/swagger-stats/stats
- http://localhost:4000/swagger-stats/metrics

## Prometheus

 `Prometheus` es un sistemas de monitoreo que se encarga de almacenar todas nuestras métricas en un TSDB (Time Serie Data Base).

 - http://localhost:9090

## Grafana

`Grafana` es un sistema de visualización y análisis de información y permite obtener datos de varios sistemas de monitoreo o bases de datos para unificar toda esta información y explorar patrones de comportamiento y crear gráficas que nos permitan tomar rápidamente decisiones.

- http://localhost:3000/

## Uso

solo debemos ejecutar el comando de docker compose:

```bash
> docker-compose -f "docker-compose.yml" up -d --build
# or
> docker-compose up
```