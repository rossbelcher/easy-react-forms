export default class FetchJSON {
    static fetch(url: string, method: string = 'GET', data: any = {}): Promise<any> {
      return new Promise((resolve, reject) => {
        const postData = JSON.stringify(data);
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open(method, url, true);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
        xhr.send(postData);
  
        function destroy() {
          xhr.onload = null;
          xhr.onerror = null;
          xhr = null;
        }
  
        xhr.onload = () => {
          if (xhr.status === 401) {
            resolve({
              error: 'no auth',
            })
          } else if (xhr.status === 204) {
            resolve(undefined);
          } else if (xhr.status === 400) {
            try {
              const data: any = xhr?.response !== null && xhr?.response !== undefined ? JSON.parse(xhr.response) : null;
              resolve(data);
            } catch {
              reject(undefined);
            }
          } else {
            try {
              const data: any = xhr?.response !== null && xhr?.response !== undefined ? JSON.parse(xhr.response) : null;
              resolve(data);
            } catch {
              reject(undefined);
            }
          }
          destroy();
        };
  
        xhr.onerror = (error: any) => {
          reject(error);
          destroy();
        };
      });
    }
  }
  