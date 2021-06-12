import React from "react";
import useSWR from "swr";
import MaterialList from "../../components/MaterialList";
import { fetchMaterials } from "../../src/apis/materials";

export default function MaterialsPage() {
  const { data: materials, error } = useSWR("/materials", fetchMaterials);

  if (error) return <div>failed to load</div>;
  if (!materials) return <div>loading...</div>;

  return <MaterialList materials={materials} />;
}
