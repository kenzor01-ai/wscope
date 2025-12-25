import { getEstimateById } from "@/src/lib/estimates/getEstimate";

export default async function EstimatePage({
  params,
}: {
  params: { estimateId: string };
}) {
  const estimateId = Number(params.estimateId);

  if (Number.isNaN(estimateId)) {
    return <div>Invalid estimate id</div>;
  }

  const estimate = await getEstimateById(estimateId);

  return (
    <div style={{ padding: 24 }}>
      <h1>Estimate #{estimate.estimateNo}</h1>

      <p>Status: {estimate.status}</p>
      <p>Client: {estimate.client?.name ?? "—"}</p>

      <hr />

      {estimate.items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {estimate.items.map((item) => (
            <li key={item.id}>Item #{item.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

