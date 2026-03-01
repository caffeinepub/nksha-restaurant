import { CalendarDays, Clock, User, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

// Generate time slots from 12:30 PM to 11:00 PM in 30-min increments
function generateTimeSlots(): string[] {
  const slots: string[] = [];
  // Start: 12:30 (12*60+30 = 750 mins), End: 23:00 (23*60 = 1380 mins)
  for (let mins = 750; mins <= 1380; mins += 30) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const period = h >= 12 ? "PM" : "AM";
    const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const displayM = m.toString().padStart(2, "0");
    slots.push(`${displayH}:${displayM} ${period}`);
  }
  return slots;
}

const TIME_SLOTS = generateTimeSlots();
const GUEST_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);

interface Props {
  className?: string;
  idPrefix?: string;
}

export default function WhatsAppBookingForm({
  className = "",
  idPrefix = "booking",
}: Props) {
  const [form, setForm] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split("T")[0];

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const text = `Hello Nksha Restaurant! I would like to book a table.\n\nName: ${form.name}\nGuests: ${form.guests}\nDate: ${form.date}\nTime: ${form.time}`;
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/919820475555?text=${encoded}`;
    window.open(url, "_blank");
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const nameId = `${idPrefix}-name`;
  const guestsId = `${idPrefix}-guests`;
  const dateId = `${idPrefix}-date`;
  const timeId = `${idPrefix}-time`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${className}`}
      noValidate
    >
      {/* Name */}
      <div className="space-y-1.5">
        <label
          htmlFor={nameId}
          className="flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
        >
          <User className="h-3.5 w-3.5" />
          Your Name
        </label>
        <input
          id={nameId}
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] placeholder:text-[oklch(0.45_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors"
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
        />
        {errors.name && (
          <p
            id={`${nameId}-error`}
            className="font-body text-xs text-red-400 mt-1"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Guests */}
        <div className="space-y-1.5">
          <label
            htmlFor={guestsId}
            className="flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
          >
            <Users className="h-3.5 w-3.5" />
            Guests
          </label>
          <select
            id={guestsId}
            value={form.guests}
            onChange={(e) => handleChange("guests", e.target.value)}
            className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors appearance-none cursor-pointer"
          >
            {GUEST_OPTIONS.map((n) => (
              <option key={n} value={n} className="bg-[oklch(0.12_0.030_155)]">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="space-y-1.5">
          <label
            htmlFor={dateId}
            className="flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Date
          </label>
          <input
            id={dateId}
            type="date"
            value={form.date}
            min={today}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors"
            aria-describedby={errors.date ? `${dateId}-error` : undefined}
          />
          {errors.date && (
            <p
              id={`${dateId}-error`}
              className="font-body text-xs text-red-400 mt-1"
            >
              {errors.date}
            </p>
          )}
        </div>

        {/* Time */}
        <div className="space-y-1.5">
          <label
            htmlFor={timeId}
            className="flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-[oklch(0.72_0.130_85)]"
          >
            <Clock className="h-3.5 w-3.5" />
            Time
          </label>
          <select
            id={timeId}
            value={form.time}
            onChange={(e) => handleChange("time", e.target.value)}
            className="w-full px-4 py-3 bg-[oklch(0.14_0.035_155)] border border-[oklch(0.25_0.040_155)] rounded-sm font-body text-sm text-[oklch(0.92_0.015_85)] focus:outline-none focus:border-[oklch(0.72_0.130_85)] focus:ring-1 focus:ring-[oklch(0.72_0.130_85/0.3)] transition-colors appearance-none cursor-pointer"
            aria-describedby={errors.time ? `${timeId}-error` : undefined}
          >
            <option value="" className="bg-[oklch(0.12_0.030_155)]">
              Select time
            </option>
            {TIME_SLOTS.map((slot) => (
              <option
                key={slot}
                value={slot}
                className="bg-[oklch(0.12_0.030_155)]"
              >
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <p
              id={`${timeId}-error`}
              className="font-body text-xs text-red-400 mt-1"
            >
              {errors.time}
            </p>
          )}
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[oklch(0.55_0.18_145)] hover:bg-[oklch(0.60_0.20_145)] text-white font-body text-base font-semibold tracking-widest uppercase rounded-sm transition-colors duration-200 shadow-lg"
      >
        <SiWhatsapp className="h-5 w-5" />
        Book via WhatsApp
      </motion.button>

      <p className="font-body text-xs text-center text-[oklch(0.50_0.015_85)]">
        You will be redirected to WhatsApp to confirm your reservation
      </p>
    </form>
  );
}
