import logoTramontinaNegativo from '@assets/institutions/logoTramontinaNegativo.png';
import logoSabanciNormal from '@assets/institutions/logoSabanciNormal.png';
import logoUfrgsNegative from '@assets/institutions/logoUfrgsNegativo.png';
import logoUfgNegative from '@assets/institutions/logoUfgNegativo.png';
import logoFgvNegative from '@assets/institutions/logoNegativaFGV.png';
import logoMitNegative from '@assets/institutions/logoNegativaMIT.png';
import logoBologna from '@assets/institutions/logoBologna.png';
import logoUnb from '@assets/institutions/logoUnb.png';
import logoNCF from '@assets/institutions/logoNCF.png';

interface DeveloperInstitutions {
  name: string;
  logoImage: string;
  size: number;
}

interface SupporterInstiturions {
  name: string;
  logoImage: string;
  size: number;
}

const developerInstitutionsLogoImages: DeveloperInstitutions[] = [
  {
    name: 'Federal University of Goiás',
    logoImage: logoUfgNegative,
    size: 40,
  },
  {
    name: 'University of Bologna',
    logoImage: logoBologna,
    size: 30,
  },
  {
    name: 'New College of Florida',
    logoImage: logoNCF,
    size: 25,
  },
  {
    name: 'Federal University of Rio Grande do Sul',
    logoImage: logoUfrgsNegative,
    size: 25,
  },
  {
    name: 'Massachusetts Institute of Technology',
    logoImage: logoMitNegative,
    size: 40,
  },
  {
    name: 'Sabanci University',
    logoImage: logoSabanciNormal,
    size: 35,
  },
  {
    name: 'Federal University of Brasília',
    logoImage: logoUnb,
    size: 25,
  },
  {
    name: 'Fundação Getulio Vargas',
    logoImage: logoFgvNegative,
    size: 80,
  },
];

const supporterInstitutionLogoImages: SupporterInstiturions[] = [
  {
    name: 'Tramontina',
    logoImage: logoTramontinaNegativo,
    size: 150,
  },
];

export { developerInstitutionsLogoImages };
export { supporterInstitutionLogoImages };
