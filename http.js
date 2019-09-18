class HTTP {
  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(this.handleErrors)
        .then(data => resolve(data))
        .catch(console.log);
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(this.handleErrors)
        .then(data => resolve(data))
        .catch(console.log);
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(this.handleErrors)
        .then(data => resolve(data))
        .catch(console.log);
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(this.handleErrors)
        .then(() => resolve("Deleted"))
        .catch(console.log);
    });
  }
}
