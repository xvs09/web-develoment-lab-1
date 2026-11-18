/** Алдаа байхгүй үед { valid: true, message: '' } буцаана. */
const ok = () => ({ valid: true, message: '' });
const fail = (message) => ({ valid: false, message });

export function validateName(value) {
  if (typeof value !== 'string') return fail('Нэрээ оруулна уу.');
  const name = value.trim();
  if (!name) return fail('Нэрээ оруулна уу.');
  if (name.length < 2 || name.length > 50) return fail('Нэр 2–50 тэмдэгттэй байх ёстой.');
  if (/\d/u.test(name)) return fail('Нэр тоо агуулж болохгүй.');
  return ok();
}

export function validateEmail(value) {
  if (typeof value !== 'string' || !value) return fail('Имэйл хаягаа оруулна уу.');
  if (/\s/u.test(value)) return fail('Имэйл зай агуулж болохгүй.');
  // нэр@домэйн.өргөтгөл: нэг @, дор хаяж нэг цэг, хоосон сегментгүй.
  if (!/^[^\s@.]+(?:\.[^\s@.]+)*@[^\s@.]+(?:\.[^\s@.]+)+$/u.test(value)) {
    return fail('Имэйлээ нэр@домэйн.өргөтгөл хэлбэрээр бичнэ үү.');
  }
  return ok();
}

export function validatePassword(value) {
  if (typeof value !== 'string' || value.length < 8) return fail('Нууц үг дор хаяж 8 тэмдэгттэй байна.');
  if (/\s/u.test(value)) return fail('Нууц үг зай агуулж болохгүй.');
  if (!/[A-Za-zА-Яа-яЁёӨөҮү]/u.test(value) || !/[0-9]/u.test(value)) {
    return fail('Нууц үг үсэг (кирилл эсвэл латин) болон тоо агуулна.');
  }
  return ok();
}

export function validateMessage(value) {
  if (typeof value !== 'string') return fail('Санал хүсэлтээ бичнэ үү.');
  const message = value.trim();
  if (message.length < 10 || message.length > 500) return fail('Санал хүсэлт 10–500 тэмдэгттэй байна.');
  return ok();
}
