# magna_numerus.js
My attempt to store large numbers above JavaScript number limit.

---

If you want to use up to e(9e15), please use break_infinity.js.

If you want to use up to e(1.8e308), please use break_break_infinity.js.

https://github.com/Patashu/break_infinity.js

---

This library uses Decimal which is expressed as (mantissa)*10^(exponent). Here are factors for Decimal:
- Mantissa uses float from 1 to 10 or 0 if the exponent was 0.
- Exponent uses BigInteger in every single value up to 10^65536-1 away from the center.

magna_numerus.min.js (compressed code for magna_numerus.js) and amplissimum_numerus.js (uses nested Decimal on exponents) is coming soon for your incremental games.
