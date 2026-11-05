self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/bibliotheque-pst-malu-apercu(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/bibliotheque-pst-malu-apercu(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!admin|api|_|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!admin|api|_|.*\\..*).*)"
  },
  {
    "regexp": "^\\/bibliotheque-pst-malu-apercu(?:\\/(_next\\/data\\/[^/]{1,}))?\\/lecture(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/lecture/:path*"
  },
  {
    "regexp": "^\\/bibliotheque-pst-malu-apercu(?:\\/(_next\\/data\\/[^/]{1,}))?\\/admin(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/admin/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()