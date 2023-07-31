import { useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";

export interface ExportProps {
  categories: Category[];
  guesses: (Pokemon | undefined)[];
}

export default function Export({ categories, guesses }: ExportProps) {
  const [open, setOpen] = useState(false);

  const exportGuesses = [
    ,
    `${categories[0]?.label ?? ""} and ${categories[4]?.label ?? ""}: ${
      guesses[0]?.Nat ?? "No answer"
    }`,
    `${categories[0]?.label ?? ""} and ${categories[5]?.label ?? ""}: ${
      guesses[1]?.Nat ?? "No answer"
    }`,
    `${categories[0]?.label ?? ""} and ${categories[6]?.label ?? ""}: ${
      guesses[2]?.Nat ?? "No answer"
    }`,
    `${categories[1]?.label ?? ""} and ${categories[4]?.label ?? ""}: ${
      guesses[3]?.Nat ?? "No answer"
    }`,
    `${categories[1]?.label ?? ""} and ${categories[5]?.label ?? ""}: ${
      guesses[4]?.Nat ?? "No answer"
    }`,
    `${categories[1]?.label ?? ""} and ${categories[6]?.label ?? ""}: ${
      guesses[5]?.Nat ?? "No answer"
    }`,
    `${categories[2]?.label ?? ""} and ${categories[4]?.label ?? ""}: ${
      guesses[6]?.Nat ?? "No answer"
    }`,
    `${categories[2]?.label ?? ""} and ${categories[5]?.label ?? ""}: ${
      guesses[7]?.Nat ?? "No answer"
    }`,
    `${categories[2]?.label ?? ""} and ${categories[6]?.label ?? ""}: ${
      guesses[8]?.Nat ?? "No answer"
    }`,
  ];

  function handleOpen() {
    setOpen(true);
    void navigator.clipboard.writeText(exportGuesses.join("\n"));
  }

  return (
    <>
      <button onClick={handleOpen}>Export</button>
      <dialog className="bg-transparent" open={open}>
        <button onClick={() => setOpen(false)}>Close</button>
        <div>The below has been copied to the clipboard.</div>
        <div className="flex flex-col">
          {exportGuesses.map((g, i) => (
            <div key={i}>{g}</div>
          ))}
        </div>
      </dialog>
    </>
  );
}
