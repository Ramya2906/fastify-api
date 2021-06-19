const fastify = require("fastify")({ logger: true });
fastify.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: "/help",
    swagger : {
        info: {title : "fastify-api"}
    }
})
fastify.register(require("./routes/main.route"));


const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000, process.env.ADDRESS || "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
