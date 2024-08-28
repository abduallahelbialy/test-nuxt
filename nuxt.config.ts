export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: "my-project",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "project products with api" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig:{currencykey:process.env.CURRENCY_API_KYE},

  // إضافة Bootstrap CSS
  css: ["bootstrap/dist/css/bootstrap.min.css"],

  // إضافة مكون إضافي لتشغيل Bootstrap JavaScript (إن كنت بحاجة له)
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],

  compatibilityDate: "2024-08-28",
});