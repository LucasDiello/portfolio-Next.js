export const getPathname = (pathname: string, lang: string | string[], lng: string) => {
    const path = pathname.split('/' + lang).join('');
    return '/' + lng + path;
  };
  