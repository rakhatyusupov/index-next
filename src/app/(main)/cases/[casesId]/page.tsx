export default async function CaseDetails({
  params,
}: {
  params: Promise<{ casesId: string }>;
}) {
  const casesId = (await params).casesId;

  return (
    <>
      <h1> Case Details {casesId}</h1>
    </>
  );
}
