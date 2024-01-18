import config from "./config.js";

const { API_ENDPOINT } = config;

// const API_ENDPOINT =
//   "http://localhost:4001";

  // 에러 목록화
  const REQUEST_ERROR = {
    '500': { msg:'요청실패' }
  }

  const request = async(url) => {
    try{
      const result = await fetch(url);
      if(result.status === 200){
        return result.json();
      }else {
        throw REQUEST_ERROR[result.status];
      }
    } catch(error){
      alert(error.msg);
      return { data: null }
    }
  }


const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchCatswithLimit: (keyword, limit) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}&limit=${limit}`);
  },
  fetchCatsPage: (keyword, page) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}&page=${page}`);
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },

  fetchCatsDetail: id => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  }
  

};

export default api;