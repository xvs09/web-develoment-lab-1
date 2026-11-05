/** Лаб 9 — хувьсагч, төрөл, хөрвүүлэлт, хөвөгч цэгийн туршилт. */
export function runExperiments() {
  const student = 'Хүслэн';
  let age = 20;
  const isStudent = true;
  const input = '42';
  const converted = Number(input);
  const rows = [
    { хувьсагч: 'student', утга: student, төрөл: typeof student },
    { хувьсагч: 'age', утга: age, төрөл: typeof age },
    { хувьсагч: 'isStudent', утга: isStudent, төрөл: typeof isStudent },
    { хувьсагч: 'input', утга: input, төрөл: typeof input },
    { хувьсагч: 'Number(input)', утга: converted, төрөл: typeof converted },
    { хувьсагч: '0.1 + 0.2', утга: 0.1 + 0.2, төрөл: typeof (0.1 + 0.2) }
  ];
  console.group('Лаб 9 — JavaScript-ийн туршилт');
  console.table(rows);
  console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3);
  console.log('Тайлбар: хоёртын хөвөгч цэгийн нарийвчлалаас 0.30000000000000004 гардаг.');
  console.groupEnd();
  return rows;
}
