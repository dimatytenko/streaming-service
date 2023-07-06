type MovieProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({params: {id}}: MovieProps) => {
  return {
    title: `Streaming service | ${id}`,
  };
};

export default function Movie({params: {id}}: MovieProps) {
  return <h1>Movie {id}</h1>;
}
