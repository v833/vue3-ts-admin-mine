class LocalCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    // TODO 如果是obj 进行转化
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    localStorage.removeItem(key)
  }
  clearCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
