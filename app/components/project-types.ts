export type ProjectStatus = "finished" | "in_dev";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  demo?: string;
  status: ProjectStatus;
  progress?: string;
};
