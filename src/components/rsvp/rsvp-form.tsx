"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateRsvp } from "@/hooks/use-create-rsvp";
import { RsvpAnswer } from "@/service/rsvp";

export function RsvpForm() {
  const rsvp = useCreateRsvp();
  const [guestName, setGuestName] = useState("");
  const [companions, setCompanions] = useState(0);
  const [answer, setAnswer] = useState<RsvpAnswer>("yes");
  const [note, setNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    rsvp.mutate({ guestName, companions, answer, note });
  }

  if (rsvp.isSuccess) {
    return (
      <div className="border border-line bg-surface p-8 text-center">
        <p className="font-display text-3xl text-tile">Recebemos seu recado</p>
        <p className="mt-3 text-mute">
          {rsvp.data.answer === "yes"
            ? "Mal podemos esperar para celebrar com você."
            : "Sentiremos sua falta nesse dia."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-line bg-surface p-6 sm:p-8">
      <div className="space-y-2">
        <label htmlFor="guestName" className="text-sm text-mute">
          Seu nome
        </label>
        <Input
          id="guestName"
          value={guestName}
          onChange={(event) => setGuestName(event.target.value)}
          required
        />
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm text-mute">Você vem?</legend>
        <div className="flex gap-3">
          <Button
            type="button"
            variant={answer === "yes" ? "default" : "outline"}
            onClick={() => setAnswer("yes")}
          >
            Sim, estarei lá
          </Button>
          <Button
            type="button"
            variant={answer === "no" ? "clay" : "outline"}
            onClick={() => setAnswer("no")}
          >
            Não poderei ir
          </Button>
        </div>
      </fieldset>
      <div className="space-y-2">
        <label htmlFor="companions" className="text-sm text-mute">
          Acompanhantes
        </label>
        <Input
          id="companions"
          type="number"
          min={0}
          max={8}
          value={companions}
          onChange={(event) => setCompanions(Number(event.target.value))}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="note" className="text-sm text-mute">
          Recado (opcional)
        </label>
        <Input
          id="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </div>
      {rsvp.isError ? (
        <p className="text-sm text-clay">{rsvp.error.message}</p>
      ) : null}
      <Button type="submit" size="lg" disabled={rsvp.isPending}>
        Enviar confirmação
      </Button>
    </form>
  );
}
