import { ref } from 'vue';

export default function useAlert(doOpen = false) {
  const alertIsVisible = ref(doOpen);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
