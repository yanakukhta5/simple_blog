function useAuth() {
  return Boolean(localStorage.getItem("isAuth"));
}

export { useAuth };
