function avatarCellTemplate(ctx) {
    const html = window.igTemplating.html;
    const data = ctx.cell.row.data;
    const pictureUrl = data.Picture 
        ? `_content/HRPortal.Library/public/${data.Picture}` 
        : '';

    return html`
        <div class="employee-cell">
            <igc-avatar shape="rounded" src="${pictureUrl}"></igc-avatar>
            <span>${data.Name || ''}</span>
        </div>
    `;
}

igRegisterScript("AvatarCellTemplate", avatarCellTemplate, false);