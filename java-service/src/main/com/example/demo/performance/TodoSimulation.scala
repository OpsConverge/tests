// src/test/java/com/example/demo/performance/TodoSimulation.scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TodoSimulation extends Simulation {
  val httpProtocol = http.baseUrl("http://localhost:8080")

  val scn = scenario("Load test todos")
    .exec(http("Get todos").get("/todos"))

  setUp(
    scn.inject(atOnceUsers(10))
  ).protocols(httpProtocol)
}
