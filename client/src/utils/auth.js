//import decode from "jwt-decode";

class ClientAuth {
  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/dashboard");
  }

  logout() {
    localStorage.removeItem("id_token");

    window.location.assign("/");
  }
}

export default new ClientAuth();
