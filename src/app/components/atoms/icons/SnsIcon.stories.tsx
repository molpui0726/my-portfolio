import type { Meta, StoryObj } from "@storybook/react";
import { withActions } from '@storybook/addon-actions/decorator';
import { SnsIcon } from "./SnsIcon";

const meta: Meta = {
    title: "components/atoms/icons/SnsIcon",
    component: SnsIcon,
    parameters: {
        actions: {
            handles: ['click .btn'],
        },
    },
    decorators: [withActions],
} satisfies Meta<typeof SnsIcon>;

export default meta;

type Story = StoryObj<typeof SnsIcon>;

export const GithubIconStory: Story = {
    args: {
        href: "https://github.com/YKhm20020",
        src: "/images/icons/github-mark.png",
        alt: "GithubIcon",
    },
};

export const GithubWhiteIconStory: Story = {
    args: {
        href: "https://github.com/YKhm20020",
        src: "/images/icons/github-mark-white.png",
        alt: "GithubIcon",
    },
};

export const QiitaIcon: Story = {
    args: {
        href: "https://qiita.com/hogeta_KL",
        src: "/images/icons/qiita-icon.png",
        alt: "QiitaIcon",
    }
};

export const QiitaWhiteIcon: Story = {
    args: {
        href: "https://qiita.com/hogeta_KL",
        src: "/images/icons/qiita-white-icon.png",
        alt: "QiitaIcon",
    }
};

export const XTwitterIcon: Story = {
    args: {
        href: "https://x.com/Hogeta_KL",
        src: "/images/icons/XTwitter-logo-black.png",
        alt: "XTwitterIcon",
    },
};

export const XTwitterWhiteIcon: Story = {
    args: {
        href: "https://x.com/Hogeta_KL",
        src: "/images/icons/XTwitter-logo-white.png",
        alt: "XTwitterIcon",
    },
};
