import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Base = { id: string; label: string; error?: string; optional?: boolean };
const describe = (id: string, error?: string) => ({ 'aria-invalid': error ? true : undefined, 'aria-describedby': error ? `${id}-err` : undefined }) as const;
const Err = ({ id, error }: { id: string; error?: string }) => (
  <div className="err" id={`${id}-err`} role={error ? 'alert' : undefined}>{error}</div>
);
const Label = ({ id, label, optional }: Pick<Base, 'id' | 'label' | 'optional'>) => (
  <label htmlFor={id}>{label}{optional ? <small> (optional)</small> : null}</label>
);

export function TextField({ id, label, error, optional, type = 'text', ...rest }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="field">
      <Label id={id} label={label} optional={optional} />
      <input id={id} name={id} type={type} {...describe(id, error)} {...rest} />
      <Err id={id} error={error} />
    </div>
  );
}

export function SelectField({ id, label, error, optional, options, placeholder, value, ...rest }: Base & { options: readonly string[]; placeholder?: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  const isPlaceholder = placeholder && (value === '' || value === undefined);
  return (
    <div className="field">
      <Label id={id} label={label} optional={optional} />
      <select id={id} name={id} value={value} className={isPlaceholder ? 'select-placeholder' : undefined} {...describe(id, error)} {...rest}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <Err id={id} error={error} />
    </div>
  );
}

export function TextAreaField({ id, label, error, optional, ...rest }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="field">
      <Label id={id} label={label} optional={optional} />
      <textarea id={id} name={id} {...describe(id, error)} {...rest} />
      <Err id={id} error={error} />
    </div>
  );
}

export function ConsentField({ id, children, error, ...rest }: { id: string; children: React.ReactNode; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className="consent" htmlFor={id}>
        <input id={id} name={id} type="checkbox" {...describe(id, error)} {...rest} />
        <span>{children}</span>
      </label>
      <Err id={id} error={error} />
    </>
  );
}

export function RadioChips({ id, legend, name, options, value, onChange, error }: { id: string; legend: string; name: string; options: readonly string[]; value: string; onChange: (v: string) => void; error?: string }) {
  return (
    <div className="field">
      <span className="lg" id={`${id}-lbl`}>{legend}</span>
      <div className="radios" role="radiogroup" aria-labelledby={`${id}-lbl`} id={id} {...describe(id, error)} tabIndex={error ? -1 : undefined}>
        {options.map((o) => (
          <label className="check" key={o}>
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} />
            <span>{o}</span>
          </label>
        ))}
      </div>
      <Err id={id} error={error} />
    </div>
  );
}

export function CheckChips({ id, legend, options, values, onToggle, error }: { id: string; legend: string; options: readonly string[]; values: string[]; onToggle: (v: string) => void; error?: string }) {
  return (
    <div className="field">
      <span className="lg" id={`${id}-lbl`}>{legend}</span>
      <div className="checks" role="group" aria-labelledby={`${id}-lbl`} id={id} {...describe(id, error)} tabIndex={error ? -1 : undefined}>
        {options.map((o) => (
          <label className="check" key={o}>
            <input type="checkbox" checked={values.includes(o)} onChange={() => onToggle(o)} />
            <span>{o}</span>
          </label>
        ))}
      </div>
      <Err id={id} error={error} />
    </div>
  );
}

export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="hp" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
      <label htmlFor="_honeypot">Leave this field empty</label>
      <input id="_honeypot" name="_honeypot" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
