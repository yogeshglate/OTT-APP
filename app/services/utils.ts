export const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password: string): string | undefined =>
  password.length >= 6 ? '' : 'Password must be at least 6 characters';
