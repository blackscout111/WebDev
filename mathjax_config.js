MathJax.Hub.Config({
  config: ["MMLorHTML.js"],

  jax: ["input/TeX","input/MathML","output/HTML-CSS","output/NativeMML"],

  extensions: ["tex2jax.js","mml2jax.js","MathMenu.js","MathZoom.js"],

  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  },

  TeX: {
    extensions: [ "AMSmath.js",
                  "AMSsymbols.js",
                  "AMScd.js",
                  "noErrors.js",
                  "noUndefined.js",
                  "autobold.js"],

    equationNumbers: { autoNumber: "AMS" }, // Turn on auto equation numbers

    Macros: {
      bm: ["{\\boldsymbol{#1}}",1],

      // Symbols
      Bzero: ["{\\bm{B}_0}"],
      finhomo: ["{\\Delta B_0}"],

      cD: ["{\\mathcal{D}}"],
      cX: ["{\\mathcal{X}}"],
      cI: ["{\\mathcal{I}}"],
      cJ: ["{\\mathcal{J}}"],
      cB: ["{\\mathcal{B}}"],
      cL: ["{\\mathcal{L}}"],

      bR: ["{\\mathbb{R}}"],
      bC: ["{\\mathbb{C}}"],
      bZ: ["{\\mathbb{Z}}"],

      a: ["{\\bm{a}}"],
      b: ["{\\bm{b}}"],
      c: ["{\\bm{c}}"],
      d: ["{\\bm{d}}"],
      e: ["{\\bm{e}}"],
      f: ["{\\bm{f}}"],
      g: ["{\\bm{g}}"],
      h: ["{\\bm{h}}"],
      i: ["{\\bm{i}}"],
      j: ["{\\bm{j}}"],
      k: ["{\\bm{k}}"],
      l: ["{\\bm{l}}"],
      m: ["{\\bm{m}}"],
      n: ["{\\bm{n}}"],
      o: ["{\\bm{o}}"],
      p: ["{\\bm{p}}"],
      q: ["{\\bm{q}}"],
      r: ["{\\bm{r}}"],
      s: ["{\\bm{s}}"],
      t: ["{\\bm{t}}"],
      u: ["{\\bm{u}}"],
      v: ["{\\bm{v}}"],
      w: ["{\\bm{w}}"],
      x: ["{\\bm{x}}"],
      y: ["{\\bm{y}}"],
      z: ["{\\bm{z}}"],
      A: ["{\\bm{A}}"],
      B: ["{\\bm{B}}"],
      C: ["{\\bm{C}}"],
      D: ["{\\bm{D}}"],
      E: ["{\\bm{E}}"],
      F: ["{\\bm{F}}"],
      G: ["{\\bm{G}}"],
      H: ["{\\bm{H}}"],
      I: ["{\\bm{I}}"],
      J: ["{\\bm{J}}"],
      K: ["{\\bm{K}}"],
      L: ["{\\bm{L}}"],
      M: ["{\\bm{M}}"],
      N: ["{\\bm{N}}"],
      O: ["{\\bm{O}}"],
      P: ["{\\bm{P}}"],
      Q: ["{\\bm{Q}}"],
      R: ["{\\bm{R}}"],
      S: ["{\\bm{S}}"],
      T: ["{\\bm{T}}"],
      U: ["{\\bm{U}}"],
      V: ["{\\bm{V}}"],
      W: ["{\\bm{W}}"],
      X: ["{\\bm{X}}"],
      Y: ["{\\bm{Y}}"],
      Z: ["{\\bm{Z}}"],
      bmOmega: ["{\\bm{\\Omega}}"],
      bmomega: ["{\\bm{\\omega}}"],
      bmphi: ["{\\bm{\\phi}}"],
      bmvphi: ["{\\bm{\\varphi}}"],

      sumK: ["{\\sum_{\\bm{k} \\in \\mathbb{Z}^d}}"],
      sumN: ["{\\sum_{\\bm{n} \\in \\mathbb{Z}^d}}"],
      intR: ["{\\int_{\\bR^d}}"],

      // Font faces
      bhat: ["{\\hat{\\bm{#1}}}",1],
      bvec: ["{\\vec{\\bm{#1}}}",1],

      // Operators
      ddiv: ["{\\operatorname{div}}"],
      trace: ["{\\operatorname{Tr}}"],
      diag: ["{\\operatorname{diag}}"],
      bldiag: ["{\\operatorname{bldiag}}"],
      sign: ["{\\operatorname{sign}}"],
      rank: ["{\\operatorname{rank}(#1)}",1],
      sspan: ["{\\operatorname{span}\\{#1\\}}",1],
      card: ["{\\operatorname{card}(#1)}",1],
      vvec: ["{\\operatorname{vec}(#1)}",1],
      sinc: ["{\\operatorname{sinc}(#1)}",1],
      ipL: ["{\\langle #1 \\rangle_{L_2}}",1],
      ipl: ["{\\langle #1 \\rangle_{\\ell_2}}",1],
      abs: ["{\\left| #1 \\right|}",1],
      norm: ["{\\abs{\\abs{#1}}}",1]
    }

  }
});


// Reconfigure MathJax
var path = document.location.pathname;
MathJax.Ajax.loadComplete(path);