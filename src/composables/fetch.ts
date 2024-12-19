import { ref, toValue, watchEffect } from "vue";

export function useFetch<T>(url: string) {
  const data = ref<T|null>(null);
  const error = ref<unknown>(null);

  const fetchData = () => {
    data.value = null;
    error.value = null;

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (data.value = err));
  };

  watchEffect(fetchData);

  return { data, error };
}
