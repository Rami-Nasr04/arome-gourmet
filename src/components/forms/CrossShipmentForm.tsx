import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { X } from 'lucide-react';
import { CrossShipmentSchema, type CrossShipmentInput } from '@/lib/schemas/crossShipment.schema';
import { submitCrossShipment } from '@/services/crossShipmentService';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Input from '@/components/ui/Input';

const MAX_ITEMS = 5;
const EMPTY_ITEM = { origin: '', type: '', bags: '' };

export default function CrossShipmentForm() {
  const { t } = useTranslation('cross');
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CrossShipmentInput>({
    resolver: zodResolver(CrossShipmentSchema),
    mode: 'onBlur',
    defaultValues: {
      origin: '',
      destination: '',
      fullName: '',
      email: '',
      phone: '',
      fax: '',
      address: '',
      items: [EMPTY_ITEM],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  const onSubmit = async (input: CrossShipmentInput) => {
    setSent(false);
    const res = await submitCrossShipment(input);
    if (res.success) {
      toast.success(t('form.success'));
      setSent(true);
      reset();
    } else {
      toast.error(t('form.error'));
    }
  };

  return (
    <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} noValidate>
      <div className="flex flex-col gap-10">
        <fieldset className="grid gap-5 sm:grid-cols-2">
          <legend className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            {t('form.route')}
          </legend>
          <Field
            label={t('form.origin')}
            htmlFor="cross-origin"
            required
            error={errors.origin && t('form.errors.origin')}
          >
            <Input
              id="cross-origin"
              type="text"
              aria-invalid={Boolean(errors.origin)}
              {...register('origin')}
            />
          </Field>
          <Field
            label={t('form.destination')}
            htmlFor="cross-destination"
            required
            error={errors.destination && t('form.errors.destination')}
          >
            <Input
              id="cross-destination"
              type="text"
              aria-invalid={Boolean(errors.destination)}
              {...register('destination')}
            />
          </Field>
        </fieldset>

        <fieldset className="grid gap-5 sm:grid-cols-2">
          <legend className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            {t('form.contact')}
          </legend>
          <Field
            label={t('form.fullName')}
            htmlFor="cross-fullname"
            required
            error={errors.fullName && t('form.errors.fullName')}
          >
            <Input
              id="cross-fullname"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              {...register('fullName')}
            />
          </Field>
          <Field
            label={t('form.email')}
            htmlFor="cross-email"
            required
            error={errors.email && t('form.errors.email')}
          >
            <Input
              id="cross-email"
              type="email"
              autoComplete="email"
              dir="ltr"
              aria-invalid={Boolean(errors.email)}
              {...register('email')}
            />
          </Field>
          <Field
            label={t('form.phone')}
            htmlFor="cross-phone"
            required
            error={errors.phone && t('form.errors.phone')}
          >
            <Input
              id="cross-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              aria-describedby="cross-phone-help"
              aria-invalid={Boolean(errors.phone)}
              {...register('phone')}
            />
            <p id="cross-phone-help" className="text-xs text-muted-foreground">
              {t('form.phoneHelp')}
            </p>
          </Field>
          <Field label={t('form.fax')} htmlFor="cross-fax">
            <Input id="cross-fax" type="tel" inputMode="tel" dir="ltr" {...register('fax')} />
          </Field>
          <Field
            label={t('form.address')}
            htmlFor="cross-address"
            required
            className="sm:col-span-2"
            error={errors.address && t('form.errors.address')}
          >
            <Input
              id="cross-address"
              type="text"
              autoComplete="street-address"
              aria-invalid={Boolean(errors.address)}
              {...register('address')}
            />
          </Field>
        </fieldset>

        <fieldset>
          <legend className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            {t('form.items')}
          </legend>
          {/* Numbered rows — a real sequence (design system §5). */}
          <ol className="flex flex-col gap-4">
            {fields.map((field, i) => (
              <li
                key={field.id}
                className="grid gap-4 rounded-[var(--radius)] border border-border bg-card/50 p-4 sm:grid-cols-[auto_1fr_1fr_1fr_auto] sm:items-end"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-lg font-medium tabular-nums text-gold"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Field
                  label={t('form.itemOrigin')}
                  htmlFor={`cross-item-origin-${i}`}
                  required
                  error={errors.items?.[i]?.origin && t('form.errors.item')}
                >
                  <Input
                    id={`cross-item-origin-${i}`}
                    type="text"
                    aria-invalid={Boolean(errors.items?.[i]?.origin)}
                    {...register(`items.${i}.origin`)}
                  />
                </Field>
                <Field
                  label={t('form.itemType')}
                  htmlFor={`cross-item-type-${i}`}
                  required
                  error={errors.items?.[i]?.type && t('form.errors.item')}
                >
                  <Input
                    id={`cross-item-type-${i}`}
                    type="text"
                    aria-invalid={Boolean(errors.items?.[i]?.type)}
                    {...register(`items.${i}.type`)}
                  />
                </Field>
                <Field
                  label={t('form.itemBags')}
                  htmlFor={`cross-item-bags-${i}`}
                  required
                  error={errors.items?.[i]?.bags && t('form.errors.item')}
                >
                  <Input
                    id={`cross-item-bags-${i}`}
                    type="text"
                    inputMode="numeric"
                    aria-invalid={Boolean(errors.items?.[i]?.bags)}
                    {...register(`items.${i}.bags`)}
                  />
                </Field>
                {i > 0 ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="min-h-11"
                    aria-label={t('form.removeItem', { n: i + 1 })}
                    onClick={() => remove(i)}
                  >
                    <X aria-hidden="true" className="size-4" />
                  </Button>
                ) : (
                  <span aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-4 flex items-center gap-3">
            <Button
              variant="outline"
              size="md"
              disabled={fields.length >= MAX_ITEMS}
              onClick={() => append(EMPTY_ITEM)}
            >
              {t('form.orderMore')}
            </Button>
            <p className="text-xs text-muted-foreground">{t('form.maxItems')}</p>
          </div>
        </fieldset>

        <div>
          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? t('form.sending') : t('form.submit')}
          </Button>
        </div>
        <p aria-live="polite" className="text-sm text-bean-deep">
          {sent && t('form.success')}
        </p>
      </div>
    </form>
  );
}
