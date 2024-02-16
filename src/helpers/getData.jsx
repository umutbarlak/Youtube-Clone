import axios from "axios";

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "792b6880efmsh80358c12cfc0dcep1e0ceajsn34f1a902dffd",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (error) {
    console.log("Verileri çekerken bir sorun oluştu");
  }
};
