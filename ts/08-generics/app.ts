

  interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }

async function requisicao <RespondeData>(url:string) {
  const res = await fetch(url)
  const data: RespondeData = await res.json()
  return {
    status: res.status,
    data
  };
}

 requisicao<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  .then((res) => {
    res.data.map((item => console.log(item)))
  })

