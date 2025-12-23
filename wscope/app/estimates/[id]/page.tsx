import { getEstimateData } from "@/src/lib/estimates/getEstimateData";

export default async function EstimatePage({
  params,
}: {
  params: { id: string };
}) {
  const jobId = Number(params.id);

  const { job } = await getEstimateData(jobId);

  return (
    <div style={{ padding: 24 }}>
      <h1>Job #{job.id}</h1>

      <p>Client: {job.client.name}</p>
      <p>Product: {job.product.name}</p>
      <p>Manufacturer: {job.product.manufacturer.name}</p>
    </div>
  );
}

