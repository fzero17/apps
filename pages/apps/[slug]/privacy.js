export default function LegacyPrivacyRoute(){
  return null;
}

export async function getServerSideProps({ params }){
  return {
    redirect: {
      destination: `/${params.slug}/privacy`,
      permanent: true,
    }
  };
}
