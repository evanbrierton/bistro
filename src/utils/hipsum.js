const get = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = () => (
    xhr.status === 200
      ? resolve(JSON.parse(xhr.responseText))
      : reject(Error(`${xhr.status}: ${xhr.statusText}`))
  );
  xhr.onerror = reject;
  xhr.send();
});

const hipsum = (n) => get(`https://hipsum.co/api/?type=hipster-centric&paras=${n}`);

export default hipsum;
