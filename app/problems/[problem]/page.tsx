export default function Page({ params }: { params: { problem: String } }) {
  return (
    <div>
      <p>{params.problem}</p>
    </div>
  );
}
