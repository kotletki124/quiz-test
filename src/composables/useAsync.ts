import { ref } from 'vue'

export function useAsync<T>(callback: (...args: any) => Promise<T>) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<any>(null)

  const execute = async (...args: any) => {
    loading.value = true
    try {
      data.value = await callback(...args)
      error.value = null
    } catch (err) {
      console.error(err)
      data.value = null
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    execute
  }
}
