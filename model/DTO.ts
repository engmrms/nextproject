namespace DTO {
  export interface IJob {
    institute: Institute;
    jobTitle: string;
    city: string;
    country: string;
    link: string;
    from: From;
    to: To;
    created?: string;
    duties: string[];
    id?: string;
  }

  interface Institute {
    name: string;
    abbreviation: string;
  }

  interface From {
    month: string;
    year: string;
  }

  interface To {
    month: string;
    year: string;
  }

  export interface IProjects {
    title: string;
    desc: string;
    link: string;
    img?: string;
    isFeatured?: boolean;
    isStar?: boolean;
    tech: string[];
    id?: string;
  }
}

export default DTO;
