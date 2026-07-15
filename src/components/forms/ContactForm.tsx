import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { ContactSchema, type ContactInput } from '@/lib/schemas/contact.schema';
import { submitContact } from '@/services/contactService';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

interface ContactFormProps {
  /** Optional prefill (e.g. the green-coffee quote interest tag). */
  defaultMessage?: string;
}

export default function ContactForm({ defaultMessage = '' }: ContactFormProps) {
  const { t } = useTranslation('contact');
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: 'onBlur',
    defaultValues: { name: '', email: '', message: defaultMessage },
  });

  const onSubmit = async (input: ContactInput) => {
    setSent(false);
    const res = await submitContact(input);
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
      <div className="flex flex-col gap-5">
        <Field
          label={t('form.name')}
          htmlFor="contact-name"
          required
          error={errors.name && t('form.errors.name')}
        >
          <Input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder={t('form.namePlaceholder')}
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
          />
        </Field>
        <Field
          label={t('form.email')}
          htmlFor="contact-email"
          required
          error={errors.email && t('form.errors.email')}
        >
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            dir="ltr"
            placeholder={t('form.emailPlaceholder')}
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />
        </Field>
        <Field
          label={t('form.message')}
          htmlFor="contact-message"
          required
          error={errors.message && t('form.errors.message')}
        >
          <Textarea
            id="contact-message"
            rows={5}
            placeholder={t('form.messagePlaceholder')}
            aria-invalid={Boolean(errors.message)}
            {...register('message')}
          />
        </Field>
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
