export default defineEventHandler(async () => {
  const data = await $fetch("https://api.currencyapi.com/v3/historical", {
    params: {
      date: "2022-01-01",
      apikey: "cur_live_SznlfosSalgUBNDe7g8VM7uve9qPzXM3HHNQoKBz", // استبدل 'YOUR-API-KEY' بمفتاح API الحقيقي
    },
  });
  return data;
});
