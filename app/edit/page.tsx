"use client";

import PageLayout from "@/layout/page-layout";
import PageTitleLayout from "@/layout/page-title-layout";

import { CldImage } from "next-cloudinary";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type Transformation = "generative-fill" | "blur" | "grayscale" | "pixelate" | undefined;

type Props = {
  searchParams: {
    publicId: string;
  };
};

type ActionButtons = {
  label: string;
  transformation: Transformation;
};

const actionButtons: ActionButtons[] = [
  {
    label: "Generative Fill",
    transformation: "generative-fill",
  },
  {
    label: "Apply Blur",
    transformation: "blur",
  },
  {
    label: "Convert to Gray",
    transformation: "grayscale",
  },
  {
    label: "Pixelate",
    transformation: "pixelate",
  },
  {
    label: "Clear All",
    transformation: undefined,
  },
];

export default function EditPage({ searchParams }: Props) {
  const [transformation, setTransformation] = useState<Transformation>();
  const { publicId } = searchParams;

  return (
    <PageLayout>
      <PageTitleLayout title="Edit Photo" />
      <div className="flex gap-2">
        {actionButtons.map(({ label, transformation }) => (
          <Button key={label} onClick={() => setTransformation(transformation)}>
            {label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <CldImage src={publicId} width={300} height={200} alt="some image" />
        {transformation === "generative-fill" && (
          <CldImage
            src={publicId}
            width={300}
            height={200}
            alt="some image"
            crop="pad"
            fillBackground
          />
        )}
        {transformation === "blur" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CldImage src={publicId} width={300} height={200} alt="some image" blur="800" />
        )}
        {transformation === "grayscale" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CldImage src={publicId} width={300} height={200} alt="some image" grayscale />
        )}
        {transformation === "pixelate" && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CldImage src={publicId} width={300} height={200} alt="some image" pixelate />
        )}
      </div>
    </PageLayout>
  );
}
