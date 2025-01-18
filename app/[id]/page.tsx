"use client";
import { useParams } from "next/navigation";

export default function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1>Nome do gato: {id}</h1>
    </div>
  );
}