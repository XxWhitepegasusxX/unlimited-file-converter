export type Action = {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    file: any;
    file_name: string;
    file_size: number;
    from: string;
    to: string | null;
    file_type: string;
    is_converting?: boolean;
    is_converted?: boolean;
    is_error?: boolean;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    url?: any;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    output?: any;
  };