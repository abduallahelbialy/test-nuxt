export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencykey } = useRuntimeConfig();

  // استخدام `&` للفصل بين المعاملات
  const uri = `https://api.currencyapi.com/v3/historical?currencies=${code}&apikey=${currencykey}`;

  // تنفيذ الطلب باستخدام $fetch
  const { data } = await $fetch(uri);

  return data;
});
